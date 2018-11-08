/**
 * @param  {string} [url=window.location] url
 */
export function getAllUrlParams(url) {
  // get query string from url (optional) or window
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split("#")[0];

    // split our query string into its component parts
    var arr = queryString.split("&");

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split("=");

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1, -1);
        return "";
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof a[1] === "undefined" ? true : a[1];

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === "string") {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === "undefined") {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

export function renameObjPropNames(obj, oldName, newName) {
  if (!obj.hasOwnProperty(oldName)) {
    return false;
  }

  obj[newName] = obj[oldName];
  delete obj[oldName];
  return true;
}

/**
 * @param {userRole} - role of current user
 * @param {...roles} - gets Roles from arguments
 * @returns true if current user approach with any of
 */

export function oneOfRoles(userRole, ...roles) {
  return roles.some(role => role === userRole);
}

export const run = (element, acceleration, offset) => {
  let timer;
  let current = window.pageYOffset;
  let to;

  if (typeof element === "object") {
    to = element.getBoundingClientRect().top;
    if (current < to) {
      to = offset ? to - offset : to + element.getBoundingClientRect().height;
    } else {
      to = to - 30;
    }
  } else {
    to = 0;
  }
  return function(animation) {
    //boolean
    let point;
    let clear;
    if (animation) return window.scrollTo(0, to); // without animation;

    if (current < to) {
      point = acceleration || 5;
      clear = function(from, to) {
        if (from > to) {
          clearTimeout(timer);
        }
      };
    } else {
      point = -acceleration || -5;
      clear = function(from, to) {
        if (from < to) {
          clearTimeout(timer);
        }
      };
    }

    timer = setInterval(function() {
      current += point;
      window.scrollTo(0, current);
      clear(current, to);
    }, 5);
  };
};
