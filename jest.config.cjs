module.exports = {
    //TODO: jsdom
    // yarn add -D jest-environment-jsdom

    testEnvironment: 'jest-environment-jsdom', 
    setupFiles:['./jest.setup.js'] ,
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],

}