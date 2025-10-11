# policy_compare.py

# cd FOLDER
# python3 policy_compare.py

# This script cleans the text between the official website text and the
# official PDF text and confirms the SRI SHA384 hash of each. If they are
# the same, this becomes the official hash used on the document metadata.

# Technically, the script removes spaces, newlines, and lowercases the text.

# Only the text from the title to the text before the metadata in the
# PDF is included.

import os
import hashlib
import base64

# List of input files and corresponding output files
files = [
    ("policy_web.txt", "policy_web_cleaned.txt"),
    ("policy_doc.txt", "policy_doc_cleaned.txt")
]

for input_file, output_file in files:
    if os.path.exists(input_file):
        # Read and clean the file
        with open(input_file, "r", encoding="utf-8") as f:
            text = f.read()

        cleaned_text = text.replace("\n", "").replace(" ", "").lower()

        # Write the cleaned text to output file
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(cleaned_text)

        print(f"Cleaned text saved to '{output_file}'")

        # Compute SHA-384 hash of cleaned file in binary mode
        with open(output_file, "rb") as f:
            file_bytes = f.read()
            sha384_hash = hashlib.sha384(file_bytes).digest()  # raw bytes

        # Convert to base64 (SRI-compatible)
        b64_hash = base64.b64encode(sha384_hash).decode('utf-8')
        print(f"SHA-384 base64 for '{output_file}': {b64_hash}")

        # Derive a simple 10-hex-digit ID (first 5 bytes = 40 bits)
        id_10hex = sha384_hash[:5].hex()
        print(f"Derived 10-hex-digit ID for '{output_file}': {id_10hex}")

    else:
        print(f"File '{input_file}' does not exist, skipping...")
