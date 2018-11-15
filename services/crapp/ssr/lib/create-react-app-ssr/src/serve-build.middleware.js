
const express = require('express')

/**
 * Settings
 * - ssrBuild (string) - client app build absolute path
 */
export const serveBuild = settings => express.static(settings.ssrBuild)
