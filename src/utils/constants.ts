// GET: https://nekos.best/api/v2/endpoints
const endpontsArray = JSON.parse(`
{
    "neko": {
        "format": "png"
    },
    "waifu": {
        "format": "png"
    },
    "husbando": {
        "format": "png"
    },
    "kitsune": {
        "format": "png"
    },
    "lurk": {
        "format": "gif"
    },
    "shoot": {
        "format": "gif"
    },
    "sleep": {
        "format": "gif"
    },
    "shrug": {
        "format": "gif"
    },
    "stare": {
        "format": "gif"
    },
    "wave": {
        "format": "gif"
    },
    "poke": {
        "format": "gif"
    },
    "smile": {
        "format": "gif"
    },
    "peck": {
        "format": "gif"
    },
    "wink": {
        "format": "gif"
    },
    "blush": {
        "format": "gif"
    },
    "smug": {
        "format": "gif"
    },
    "tickle": {
        "format": "gif"
    },
    "yeet": {
        "format": "gif"
    },
    "think": {
        "format": "gif"
    },
    "highfive": {
        "format": "gif"
    },
    "feed": {
        "format": "gif"
    },
    "bite": {
        "format": "gif"
    },
    "bored": {
        "format": "gif"
    },
    "nom": {
        "format": "gif"
    },
    "yawn": {
        "format": "gif"
    },
    "facepalm": {
        "format": "gif"
    },
    "cuddle": {
        "format": "gif"
    },
    "kick": {
        "format": "gif"
    },
    "happy": {
        "format": "gif"
    },
    "hug": {
        "format": "gif"
    },
    "baka": {
        "format": "gif"
    },
    "pat": {
        "format": "gif"
    },
    "nod": {
        "format": "gif"
    },
    "nope": {
        "format": "gif"
    },
    "kiss": {
        "format": "gif"
    },
    "dance": {
        "format": "gif"
    },
    "punch": {
        "format": "gif"
    },
    "handshake": {
        "format": "gif"
    },
    "slap": {
        "format": "gif"
    },
    "cry": {
        "format": "gif"
    },
    "pout": {
        "format": "gif"
    },
    "handhold": {
        "format": "gif"
    },
    "thumbsup": {
        "format": "gif"
    },
    "laugh": {
        "format": "gif"
    }
}`);

export const _endpontsArray = Object.keys(endpontsArray).map((key) => [key, endpontsArray[key].format]);