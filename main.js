module.exports = function spreader(string, n) {
    let _ = "-".repeat(n);
    return string.split(" ").join(_)
    
  }