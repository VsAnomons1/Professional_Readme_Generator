
module.exports = {
  getMarkdownBadge: (markdown) =>{
        if(markdown == "MIT"){
            return "![Cocoapods](https://img.shields.io/cocoapods/l/m?style=plastic)"
        }
        else if(markdown == "Apache"){
                return "![PyPI - License](https://img.shields.io/pypi/l/q?color=light%20green)"
        }
        else {
                return "![PyPI - License](https://img.shields.io/pypi/l/c?color=light%20green&style=for-the-badge)"
        }
    }
  }