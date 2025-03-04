import random
def get_random_ts_code():
    """Generate a random TS code."""
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    ts_code = ''
    for i in range(10):
        ts_code += random.choice(alphabet)
    return ts_code