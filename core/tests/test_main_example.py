"""Testing examples for pytest."""

from src import module
import pytest


def test_pass():
    """Example passing test module for pytest."""
    assert True


def test_skip():
    """Example skipping test module for pytest."""

    pytest.skip("Skipping this test module.")


def test_fail():
    """Example failing test module for pytest."""
    assert True  # False


def test_error():
    """Example error test module for pytest."""
    assert True
    # raise RuntimeError(
    #     "This is an example exception (RuntimeError) for the test module."
    # )


def test_main_module():
    """Example test for module."""

    module.a_function()

    assert True
