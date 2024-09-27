from setuptools import setup, Extension
from Cython.Build import cythonize

"""
python setup_relay.py build_ext --inplace
"""

extensions = [
    Extension(
        "unit_4relay",
        sources=["cylib/unit_4relay.pyx"],
        libraries=["smbus"],  # Ensure smbus library is linked
    )
]

setup(
    name="unit_4relay",
    ext_modules=cythonize(extensions),
)

"""
Example usage:
import unit_4relay

relay = unit_4relay.UNIT_4RELAY()
if relay.begin():
    print("Relay initialized successfully")
    relay.Init(0)           # Set mode to Async and turn off all relays
    relay.switchMode(1)     # Switch to Sync mode
    relay.relayAll(1)       # Turn all relays on
    relay.ledAll(1)         # Turn all LEDs on
    relay.relayWrite(2, 1)  # Turn on relay 2
    relay.ledWrite(1, 0)    # Turn off LED 1
else:
    print("Failed to initialize relay")
"""