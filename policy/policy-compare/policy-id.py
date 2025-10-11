#!/usr/bin/env python3
# sri_to_hex.py
# Usage: python3 sri_to_hex.py

import base64

def sri_to_12hex(sri_b64: str) -> str:
    """
    Convert a SHA-384 SRI base64 string to a 12-hex-digit ID.
    Takes the first 6 bytes (48 bits) of the hash.
    """
    try:
        raw_bytes = base64.b64decode(sri_b64)
    except Exception as e:
        raise ValueError(f"Invalid Base64 input: {e}")
    
    # Take first 6 bytes and convert to hex
    id_12hex = raw_bytes[:6].hex()
    return id_12hex

if __name__ == "__main__":
    sri_b64 = input("Enter the SRI Base64 hash (without 'sha384-'): ").strip()
    if not sri_b64:
        print("No input provided.")
    else:
        try:
            hex_id = sri_to_12hex(sri_b64)
            print(f"Derived 12-hex-digit ID: {hex_id}")
        except ValueError as e:
            print(f"Error: {e}")
