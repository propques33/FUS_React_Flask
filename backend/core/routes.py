from flask import Blueprint, jsonify, current_app
import requests

core_bp = Blueprint('core', __name__)

@core_bp.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Flask backend is running"})

def to_camel_case(input_str):
    return ' '.join(word.capitalize() for word in input_str.split())

@core_bp.route('/get_locations', methods=['GET'])
def get_locations():
    db = current_app.config['db']
    cities = db.fillurdetails.distinct('city')
    camel_case_cities = list(set(to_camel_case(city.strip().lower()) for city in cities))
    return jsonify({'locations': sorted(camel_case_cities)})

@core_bp.route('/api/blogs', methods=['GET'])
def get_blogs_api():
    try:
        api_url = 'https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs'
        response = requests.get(api_url)
        if response.status_code != 200:
            return jsonify({'error': 'Failed to fetch data'}), response.status_code

        data = response.json()
        all_blogs = data.get('pages', [])
        filtered_blogs = [b for b in all_blogs if b.get('publishOn') == "Findurspace"]

        for blog in filtered_blogs:
            content = blog.get("contentBody", "")
            word_count = len(content.split())
            blog["read_time"] = max(1, round(word_count / 200))

        return jsonify({'blogs': filtered_blogs})
    except Exception as e:
        return jsonify({'error': str(e)}), 500