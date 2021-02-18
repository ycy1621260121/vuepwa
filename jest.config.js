module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "collectCoverage": true, // 统计覆盖率
    transform: {
        "^.+\\.tsx?$": "ts-jest" // 匹配 .ts 或者 .tsx 结尾的文件
    },
  "coverageReporters": ["html", "text-summary"],
    "coveragePathIgnorePatterns": [ // 不算入覆盖率的文件夹
        "/node_modules/",
        "/tests/",
        "/deps/"
    ]
}
