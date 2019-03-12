module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'vue'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '.*\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.js',
  },
  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
  },
};
