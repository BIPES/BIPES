from flask import (
      Blueprint, request
  )
import json

from server.common import database as dbase

#--------------------------------------------------------------------------
# Blueprint
bp = Blueprint('api', __name__, url_prefix='/api')
_db = 'API'

#---------------------------------------------------------------------------
# Generic handlers

# Get shared projects
@bp.route('/project/ls', methods=('POST', 'GET'))
def project_ls():
    obj = request.json
    cols = ['uid','author','name','lastEdited']

    if obj != None and 'from' in obj and 'limit' in obj:
        return dbase.rows_to_json(dbase.select(_db, 'projects', cols, obj['from'], obj['limit']))
    else:
        return dbase.rows_to_json(dbase.select(_db, 'projects', cols))



# Get a shared project
@bp.route('/project/o', methods=('GET', 'POST'))
def project_o():
    obj = request.json
    cols = ['uid','auth','author','name','lastEdited', 'data']

    if 'uid' in obj:
      _fetch = dbase.fetch(_db, 'projects', cols, ['uid', obj['uid']])
      return {} if _fetch[2] is None else dbase.rows_to_json(_fetch, single=True)


# Share a project
@bp.route('/project/cp', methods=('GET', 'POST'))
def project_cp():
    obj = request.json
    name = obj['data']['project']['name']
    author = obj['data']['project']['author']

    uid = dbase.uid(6)
    token = dbase.uid(6)
    auth = token + obj['cors_token']

    dbase.insert(_db, 'projects',
        ['uid','auth','author','name','data'],
        (uid, auth, author, name, json.dumps(obj['data'])))

    return {'uid':uid, 'token':token}

# Unshare a project
@bp.route('/project/rm', methods=('GET', 'POST'))
def project_rm():
    obj = request.json
    uid = obj['uid']
    auth = obj['token'] + obj['cors_token']

    dbase.delete(_db, 'projects', ['uid', 'auth'], [uid, auth])

    return {'uid':uid}

# Update a project
@bp.route('/project/w', methods=('GET', 'POST'))
def project_w():
    obj = request.json
    name = obj['data']['project']['name']
    author = obj['data']['project']['author']

    uid = obj['data']['project']['shared']['uid']
    auth = obj['data']['project']['shared']['token'] + obj['cors_token']
    # Remove token
    obj['data']['project']['shared']['uid'] = ''
    obj['data']['project']['shared']['token'] = ''

    dbase.update(_db, 'projects',
        ['author','name','data','uid','auth'],
        (author, name, json.dumps(obj['data']), uid, auth))

    return {'uid':uid}
