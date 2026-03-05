class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
  }
}



class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = new Map();

    for (const ch of s) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for (const ch of t) {
      const count = freq.get(ch);
      if (!count) return false; // missing or already depleted
      if (count === 1) freq.delete(ch);
      else freq.set(ch, count - 1);
    }

    return true;
  }
}