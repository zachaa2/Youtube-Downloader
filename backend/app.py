from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin
from pytube import YouTube
import os
import shutil

app = Flask(__name__)

# global cors
CORS(app) 

@app.route('/download', methods=['POST'])
def download_video():
    youtube_url = request.json['url']

    yt = YouTube(youtube_url)
    vid = yt.streams.filter(progressive=True, file_extension='mp4').order_by("resolution").desc().first()

    if not os.path.exists('temp'):
        os.makedirs('temp')
    
    vid.download(output_path='temp', filename='downloaded_video.mp4')
    file_path = os.path.join('temp', 'downloaded_video.mp4')
    return send_file(file_path, as_attachment=True)

@app.route('/clear-temp', methods=["POST"])
def clean_temp_folder():
    folder = 'temp'
    exclude_file = 'temp.txt'

    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        if filename == exclude_file:
            continue
        
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            return f"Failed to delete {file_path}. Reason {e}", 500
    
    return "Temp folder cleared", 200


if __name__ == "__main__":
    app.run(host='::', port=5000)
    
 