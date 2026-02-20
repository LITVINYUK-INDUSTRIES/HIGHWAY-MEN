import os

# Configuration: What files to include and what folders to ignore
INCLUDE_EXTENSIONS = {'.js', '.html', '.css'}
IGNORE_DIRS = {'node_modules', '.git', 'dist', 'assets'} 
OUTPUT_FILE = 'PROJECT_SYNC.txt'

def bundle_files():
    project_root = os.getcwd()
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        outfile.write(f"PROJECT_MANIFEST: HIGHWAY-MEN\n")
        outfile.write(f"VERSION: v0.0.6-MODULAR\n")
        outfile.write("-" * 30 + "\n\n")

        for root, dirs, files in os.walk(project_root):
            # Prune ignored directories
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

            for file in files:
                if any(file.endswith(ext) for ext in INCLUDE_EXTENSIONS):
                    file_path = os.path.join(root, file)
                    rel_path = os.path.relpath(file_path, project_root)
                    
                    outfile.write(f"FILE: {rel_path}\n")
                    outfile.write("```" + ("html" if file.endswith(".html") else "javascript") + "\n")
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            outfile.write(f.read())
                    except Exception as e:
                        outfile.write(f"// Error reading file: {e}\n")
                    
                    outfile.write("\n```\n\n")
        
    print(f"Success! {OUTPUT_FILE} created. Copy its contents to Gemini.")

if __name__ == "__main__":
    bundle_files()