import sqlite3

import click
from flask import (
      Blueprint, flash, g, redirect, render_template, request, session,
      current_app
  )
from flask.cli import with_appcontext
import functools
import uuid
import json
import re


#------------------------------------------------------------------------
# Generate the database the first time, call only from the Makefile
def make():
    db = sqlite3.connect('mosquitto.db')
  
    with open('mosquitto.sql') as f:
        db.executescript(f.read())
    db.commit()
    db.close()

#--------------------------------------------------------------------------
# Blueprint
bp = Blueprint('mqtt', __name__, url_prefix='/mqtt')


