"""Testing examples for pytest."""
import pytest


# Your python interpreter wont find the *module*s. because python + pytest are being weird about code locations. Those will be yellow underlined. This is a known issue with pytest and python.
# Below lines fixes the sys.path issue in runtime by adding our /src folder as reference to find more modules.
import sys  
sys.path.append('src')

import module

def test_pass():
    """Example passing test module for pytest."""
    assert True

def test_skip():
    """Example skipping test module for pytest."""

    pytest.skip("Skipping this test module.")

def test_fail():
    """Example failing test module for pytest."""
    assert False

def test_error():
    """Example error test module for pytest."""
    raise RuntimeError("This is an example exception (RuntimeError) for the test module.")

def test_main_module():
    """Example test for module."""

    module.a_function()

    assert True
