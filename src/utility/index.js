import React from "react"
import { useIntl } from "react-intl"

export function wordWrap(str, maxWidth) {
  var newLineStr = "\n",
    res = "",
    i

  while (str.length > maxWidth) {
    let found = false
    // Inserts new line at first whitespace of the line
    for (i = maxWidth - 1; i >= 0; i--) {
      if (testWhite(str.charAt(i))) {
        res = res + [str.slice(0, i), newLineStr].join("")
        str = str.slice(i + 1)
        found = true
        break
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      res += [str.slice(0, maxWidth), newLineStr].join("")
      str = str.slice(maxWidth)
    }
  }

  return res + str
}

function testWhite(x) {
  var white = new RegExp(/^\s$/)
  return white.test(x.charAt(0))
}

let rtrim = function (str, charlist) {
  charlist = !charlist
    ? " \\s\u00A0"
    : (charlist + "").replace(/([[\]().?/*{}+$^:])/g, "\\$1")
  const re = new RegExp("[" + charlist + "]+$", "g")
  return (str + "").replace(re, "")
}

let strpos = function (haystack, needle, offset) {
  const i = (haystack + "").indexOf(needle, offset || 0)
  return i === -1 ? false : i
}

export function wordCut(value, length, preserve = "", separator = "") {
  let rtnval = ""
  let breakpoint = false
  if (!value) return ""

  if (value.length > length) {
    if (preserve) {
      if (false !== (breakpoint = strpos(value, " ", length))) {
        length = breakpoint
      } else if (false !== (breakpoint = strpos(value, " ", length - 1))) {
        length = breakpoint
      } else {
        return value
      }
    }

    rtnval = value.substring(0, length)
    rtnval = rtrim(rtnval, "!,.-")

    return rtnval + separator
  }

  return value
}

export const pathSplit = pathname => {
  if (!pathname) return ""
  return pathname.split("/")
}

export const findLocale = pathname => {
  if (pathname !== "" && pathSplit(pathname)[1] === "en") return "en"
  else return "kr"
}

export function getCookie(cname) {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  if (!exdays) exdays = 1
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export const pathClean = pathlist => {
  if (!pathlist) pathlist = []
  //const pathlist = pathname?.split("/") || []
  if (["ko", "en"].indexOf(pathlist[1]) > -1) {
    pathlist.splice(1, 1)
  }
  return pathlist
}

export const MultiPhrase = ({ id }) => {
  const intl = useIntl()
  return (
    <div>
      {intl
        .formatMessage({ id })
        .split("^")
        .map(line => {
          return <p>{line}</p>
        })}
    </div>
  )
}
