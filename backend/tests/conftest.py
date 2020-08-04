import pytest
import sys
import os

sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), "../")))

from app import app 

@pytest.fixture
def client():
    return app.test_client()
