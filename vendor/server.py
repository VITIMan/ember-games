import json
import logging
import re
import sys

# gunicorn --pid /tmp/music-server.pid -c \
# /PATH/TO/gunicorn.conf server:app
# logging config
# ###############################
logger = logging.getLogger("MusicServer")
logger.setLevel(logging.DEBUG)
logger.propagate = False

ch = logging.StreamHandler(sys.stdout)
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s|%(levelname)s|%(name)s|%(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)
# ###############################


values = [{"type": "games",
           "id": 1,
           "attributes": {"text": "Super Mario Land",
                          "sub": "from gunicorn 1",
                          "image": "https://upload.wikimedia.org/wikipedia/en/0/02/Supermariolandboxart.jpg"}},
          {"type": "games",
           "id": 2,
           "attributes": {"text": "Super Mario Land 2: 6 Golden Coins",
                          "sub": "from gunicorn 2",
                          "image": "https://upload.wikimedia.org/wikipedia/en/0/0d/Super_Mario_Land_2_box_art.jpg"}},
          {"type": "games",
           "id": 3,
           "attributes": {"text": "Wario Land: Super Mario Land 3",
                          "sub": "from gunicorn 3",
                          "image": "https://upload.wikimedia.org/wikipedia/en/5/5f/Wario_Land_Box_Art.jpg"}}]


def do_GET(environ, start_response):
    headers = [('Content-Type', 'application/json'),
               ('Access-Control-Allow-Origin', 'http://localhost:4200')]
    path = environ['PATH_INFO']
    logger.info(path)
    match = re.match('/v1/games/(\d+)', path)
    if match is not None:
        start_response("200 OK", headers)
        response = json.dumps({"data": values[int(match.group(1)) - 1]})
        logger.info(response)
        return response
    elif 'games' in path:
        start_response("200 OK", headers)
        return json.dumps({"data": values})
    else:
        start_response("404 Not Found", {})
        return ''


def app(environ, start_response):

    method = environ['REQUEST_METHOD']
    # ua = environ.get('HTTP_USER_AGENT', '')

    if method == 'GET':
        ret = do_GET(environ, start_response)
    else:
        start_response("403 Method Not Allowed", [])
        ret = ''
    return ret
