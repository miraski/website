#!/bin/sh -xe

# HOWTO
#
# 1. Make sure you have an mp4 file and change dir:
#   mv ~/Downloads/MiraSki2012.mp4 ~/Source/miraski/public/video/2012.mp4
#   cd ~/Source/miraski/public/video
#
# 2. Run the script:
#   ./process.sh 2012.mp4
#

SOURCE_FILE=$1
BASENAME="${1%.*}"
SEGMENT_TIME=10

if [ -z "$SOURCE_FILE" ]; then
  echo "Source file not specified!"
  exit 1
fi
if [ ! -f "$SOURCE_FILE" ]; then
  echo "Source file not found!"
  exit 1
fi

# Create thumbmail
if [ -f "$BASENAME.jpg" ]; then
  rm "$BASENAME.jpg"
fi
ffmpeg -i "$SOURCE_FILE" -ss 00:01:09.000 -vframes 1 "$BASENAME.jpg"

# Convert source file to: [container: MP4, video: AVC/H.264 (Main 3), audio: AAC (Main)]
if [ -f "$BASENAME.mp4" ]; then
  rm "$BASENAME.mp4"
fi
ffmpeg -i "$SOURCE_FILE" -c:v libx264 -vprofile main -vlevel 3 -pix_fmt yuv420p -c:a aac -profile main "$BASENAME.mp4"

# Convert source file to: [container: WEBM, video: VP8, audio: OggVorbis]
if [ ! -f "$BASENAME.webm" ]; then
  rm "$BASENAME.webm"
fi
ffmpeg -i "$SOURCE_FILE" -c:v libvpx-vp9 -pix_fmt yuv420p -c:a libopus -crf 30 -pass 1 -an -f webm -y /dev/null
ffmpeg -i "$SOURCE_FILE" -c:v libvpx-vp9 -pix_fmt yuv420p -c:a libopus -crf 30 -pass 2 "$BASENAME.webm"
