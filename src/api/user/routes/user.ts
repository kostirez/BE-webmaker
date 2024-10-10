module.exports = {
  routes: [
    {
      "method": "GET",
      "path": "/auth/check-token",
      "handler": "user.checkToken",
      "config": {
        "policies": []
      }
    }
  ]
}
