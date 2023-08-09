/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const { GoogleSocialLogin } = require('cypress-social-logins').plugins
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  getCompareSnapshotsPlugin(on)
  addMatchImageSnapshotPlugin(on, config)
}

// Configuration for Multiple Enviroments
module.exports = (on) => {
  on('task', {
    GoogleSocialLogin: GoogleSocialLogin
  })
}
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'Local'

  return getConfigurationByFile(file)
}
