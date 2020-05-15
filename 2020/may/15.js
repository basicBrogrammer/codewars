// URL: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
//
// Extract the domain name from a URL
//
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
const URL = require("url").URL;

const requireProtocol = uri => (uri.includes("http") ? uri : "http://" + uri);
const getDomainFromHost = host => host.replace("www.", "").split(".")[0];
const domainName = uri => getDomainFromHost(new URL(requireProtocol(uri)).host);

domainName("http://github.com/carbonfive/raygun") == "github";
domainName("http://www.zombie-bites.com") == "zombie-bites";
domainName("https://www.cnet.com") == "cnet";
