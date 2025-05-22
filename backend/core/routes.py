from flask import Blueprint, jsonify

core_bp = Blueprint('core', __name__)

@core_bp.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Flask backend is running"})