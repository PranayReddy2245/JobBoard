from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory job store
jobs = []

@app.route('/jobs', methods=['GET'])
def get_jobs():
    return jsonify(jobs), 200

@app.route('/jobs', methods=['POST'])
def post_job():
    job_data = request.get_json()
    job_data['id'] = len(jobs) + 1
    jobs.append(job_data)
    return jsonify({"message": "Job added"}), 201

if __name__ == '__main__':
    app.run(debug=True)
