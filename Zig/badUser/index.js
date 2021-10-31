function solution(user_id, banned_id) {
  const caseArray = banned_id.reduce((acc, bid) => {
    acc.push(findMatch(user_id, bid));
    return acc;
  }, []);

  console.log(caseArray);

  const result = new Set();

  dfs(caseArray, 0, new Set());

  function dfs(caseArray, level, caseSet) {
    if (level === caseArray.length) {
      result.add([...caseSet].sort().join(', '));
      return;
    }

    for (let uid of caseArray[level]) {
      const next = new Set([...caseSet, uid]);
      if (next.size !== caseSet.size) {
        dfs(caseArray, level + 1, next);
      }
    }
  }

  return result.size;
}

function findMatch(ids, target) {
  return ids.reduce((acc, uid) => {
    if (isEqual(uid, target)) acc.push(uid);
    return acc;
  }, []);
}

function isEqual(userId, bannedId) {
  if (userId.length !== bannedId.length) return false;

  for (let i = 0; i < userId.length; i++) {
    if (userId[i] === bannedId[i] || bannedId[i] === '*') continue;
    else return false;
  }

  return true;
}

console.log(solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', 'abc1**'])); // 2 ((2 * 1) * (1 * 1))
console.log(solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['*rodo', '*rodo', '******'])); // 2 (() * (2 * 1))
console.log(solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', '*rodo', '******', '******'])); // 3 (() * ()
