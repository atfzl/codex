function cov_kvfzvmt1e() {
  var path = "/Users/aafzal/scratch/istanbul/hello/src/index.tsx";
  var hash = "c2f064cbbf31c74864ccd52f2149d0484f6f3bd2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/aafzal/scratch/istanbul/hello/src/index.tsx",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 20
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 25
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 23
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "5": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 16
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 26
        }
      },
      "7": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "foo",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 12
          }
        },
        loc: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        }, {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        }],
        line: 4
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c2f064cbbf31c74864ccd52f2149d0484f6f3bd2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kvfzvmt1e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_kvfzvmt1e();
cov_kvfzvmt1e().s[0]++;
console.log('file');

function foo() {
  cov_kvfzvmt1e().f[0]++;
  cov_kvfzvmt1e().s[1]++;

  if (true === true) {
    cov_kvfzvmt1e().b[0][0]++;
    cov_kvfzvmt1e().s[2]++;
    console.log('index');
  } else {
    cov_kvfzvmt1e().b[0][1]++;
    cov_kvfzvmt1e().s[3]++;
    console.log('else');
  }

  cov_kvfzvmt1e().s[4]++;

  for (let i = (cov_kvfzvmt1e().s[5]++, 0); i < 5; ++i) {
    cov_kvfzvmt1e().s[6]++;
    console.log('i =', i);
  }
}

cov_kvfzvmt1e().s[7]++;
foo();

