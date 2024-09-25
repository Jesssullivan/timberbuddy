from setuptools import setup
from setuptools.extension import Extension
from Cython.Build import cythonize

"""
python setup_enc.py build_ext --inplace
"""

extensions = [
    Extension(
        "unit_ext_encoder",
        ["cylib/unit_ext_encoder.pyx"],
        libraries=["smbus"],
    )
]

setup(
    name="UNIT_EXT_ENCODER",
    ext_modules=cythonize(extensions),
)

