#!/usr/bin/env python3

import json
import string
from flask import Flask, request, Response

app = Flask(__name__)

@app.route("/passgen", methods=["POST"])
def generate_password():
    crit = request.get_json()
    if "length" not in crit and type(crit["length"]) != str \
        and "spec_chars" not in crit and type(crit["spec_chars"]) != str:
        return Response(status = 400)

    length = crit["length"]
    spec_chars = crit["spec_chars"]

    letters = string.printable

    return None


app.run()
