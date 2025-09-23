/**
 * @file utils/files.js
 * @brief Utility functions for reading and writing JSON files.
 *        Includes safe loading with defaults and automatic directory creation on save.
 */

const fs = require('fs');
const path = require('path');

/**
 * Safely load JSON from a file.
 * Returns a default value if the file does not exist or JSON parsing fails.
 * @param {string} filePath - Path to the JSON file.
 * @param {*} [defaultValue=[]] - Value to return if file is missing or invalid.
 * @returns {*} Parsed JSON content or defaultValue.
 */
const loadJSON = (filePath, defaultValue = []) => {
    if (!fs.existsSync(filePath)) return defaultValue;

    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.error(`Failed to read ${filePath}:`, err);
        return defaultValue;
    }
};

/**
 * Save data as JSON to a file.
 * Automatically creates directories if they do not exist.
 * @param {string} filePath - Path to save the JSON file.
 * @param {*} data - Data to serialize and save.
 */
const saveJSON = (filePath, data) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// ---------------------- Export ----------------------
module.exports = { loadJSON, saveJSON };
