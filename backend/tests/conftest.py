import sys
import os

sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), "../")))

import pytest
from app import app 

@pytest.fixture
def client():
    """Setting up test client."""
    return app.test_client()
