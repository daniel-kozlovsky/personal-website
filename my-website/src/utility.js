/** @module utility.js
* Utility module for helper functions and global values
* Daniel K 2021
*/

/********Values*************/
//div ids for the projects page. Used to access via anchor
export const VIRTUAL_SHOWROOM_ID = "virtual-showroom";
export const RESEARCH_PAPER_ID = "research-paper";
export const SMART_SHOPPER_ID = "smart-shopper";
export const ONLINE_BOOKSTORE_ID = "online-bookstore";

//Page URLs for routing
export const ABOUT_PATH = "/About";
export const PROJECTS_PATH = "/Projects";
export const CONTACT_PATH = "/Contact";
export const RESUME_PATH = "/Resume";

//Name of malware paper
export const PAPER_NAME = "Clustering_Android_Malware.pdf";
//Name of resume
export const RESUME_NAME = "Daniel_Kozlovsky_Resume.pdf";
//smart shopper URL
export const SS_HREF = "https://thesmartshopper.online";
//Kablan URL
export const KABLAN_HREF ="https://www.kablan.ca/";


/**
 * Converts and RGG CSS value to RGBA by adding opacity
 * @param {string} rgb - CSS colour string in rgb format to convert
 * @param {number} alpha - the opacity to give the rgb colour. Must be <= 1
 * @returns {string} - CSS colour in rgba format with added alpha
 */
export function addAlphaToRGB(rgb, alpha) {
    let parts = rgb.split(",");
    parts[0] = "rgba("+ parts[0].split("(")[1];
    parts[2] = parts[2].split(")")[0];
    parts[3] = `${alpha})`;
    return parts.join();
}

