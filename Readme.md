**WORK IN PROGRESS** - NEED HELP DECODING THE GERM GUARDIAN LOGIN API AND THE COMMANDS


**GermGuardian API**

*Headers*
* **x-guardian-auth** - Unknown
* **x-hubea-auth** - InstallId (generated):Unknown
* **Content-MD5** - MD5 of the body
* **x-hubea-date** - Current Time -Mon, 04 Dec 2017 02:41:16 +0000


**API Calls in order they ran:**

**POST - https://guardian.hubea.com/air/users/login**

Logs in the user

Example Request Body:
```
{
  "installId": "hWCbbcJyHn9GRas%FSXvLmyQAx74Ut5DLLBe#QA7bgu!cQgY", - Same as InstallID in header
  "username": "SECURET_USER",
  "password": "SECRET_PASS",
  "userAgent": {
    "os": "iOS",
    "model": "",
    "fingerprint": "",
    "systemVersion": 7,
    "idForVendor": "",
    "advertisingId": "",
    "versionCode": 37,
    "appType": "1",
    "appVersion": 4,
    "buildNumber": "",
    "lang": "en",
    "locale": "en-US",
    "location": ""
  },
  "hs": "p"
}
```

Example Response Body:
```
{
	"sessionToken": "secret_token",
	"username": "secret_user",
	"result": 0
}
```


**POST - https://guardian.hubea.com/air/users/migrate**

No clue what this does

Example Request Body:
```
{
	"installId": "hWCbbcJyHn9GRas%FSXvLmyQAx74Ut5DLLBe#QA7bgu!cQgY",
	"userAgent": {
		"os": "iOS",
		"model": "",
		"fingerprint": "",
		"systemVersion": 7,
		"idForVendor": "",
		"advertisingId": "",
		"versionCode": 37,
		"appType": "1",
		"appVersion": 4,
		"buildNumber": "",
		"lang": "en",
		"locale": "en-US",
		"location": ""
	},
	"hs": "p"
}
```

Example Response Body:
```
{
	"result": 0
}
```

**POST - https://guardian.hubea.com/air/devices/list**

Lists the user's devices

```
{
	"installId": "hWCbbcJyHn9GRas%FSXvLmyQAx74Ut5DLLBe#QA7bgu!cQgY",
	"userAgent": {
		"os": "iOS",
		"model": "",
		"fingerprint": "",
		"systemVersion": 7,
		"idForVendor": "",
		"advertisingId": "",
		"versionCode": 37,
		"appType": "1",
		"appVersion": 4,
		"buildNumber": "",
		"lang": "en",
		"locale": "en-US",
		"location": ""
	},
	"hs": "p"
}
```

Example Response Body:
```
{
	"devices": [{
		"jm1UniqueId": "00045E4E",
		"localKey": "t4x3zO\/VZ8SsiYj+eHrphA==",
		"deviceName": "A Purifier",
		"userData": "{\"handle\":\"YnBsaXN0MDDUAQIDBAUGS0xYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoK8QGgcIISIjJCUmJygpKiszNDU2PD1BQkNERUZHVSRudWxs0wkKCwwWIFdOUy5rZXlzWk5TLm9iamVjdHNWJGNsYXNzqQ0ODxAREhMUFYACgAOABIAFgAaAB4AIgAmACqkXGBkaGxwdHh+AC4AMgBGAEoAUgBWAFoAXgBiAGVNQZUlTUGxUU1BjVlNUeVBTSGZWU1VuTVNGbk5TTWFTU1R3T08QEDEYQ54A17kSXpplSFh47nzSCgssMqUtLi8vLoANgA6AD4APgA6AEBAAE\/\/\/\/\/\/\/\/\/+AEGPSNzg5OlokY2xhc3NuYW1lWCRjbGFzc2VzV05TQXJyYXmiOTtYTlNPYmplY3QT\/\/\/\/\/+7zxI3SCgs+MqE\/gBOAEBIAAWw4EAFRIBIAAQAPTxAQAAAAACT2QACgAAReTs0ldyNBv8zzPvdRJtI3OEhJXxATTlNNdXRhYmxlRGljdGlvbmFyeaNISjtcTlNEaWN0aW9uYXJ5XxAPTlNLZXllZEFyY2hpdmVy0U1OVHJvb3SAAQAIABEAGgAjAC0AMgA3AFQAWgBhAGkAdAB7AIUAhwCJAIsAjQCPAJEAkwCVAJcAoQCjAKUApwCpAKsArQCvALEAswC1ALkAvQDBAMUAyQDNANEA1QDZAOwA8QD3APkA+wD9AP8BAQEDAQUBDgEQARUBIAEpATEBNAE9AUYBSwFNAU8BUQFWAVgBWgFfAXIBewGAAZYBmgGnAbkBvAHBAAAAAAAAAgEAAAAAAAAATwAAAAAAAAAAAAAAAAAAAcM=\",\"key\":\"t4x3zO\/VZ8SsiYj+eHrphA==\",\"pinCode\":\"1234\",\"serviceUuid\":\"00000000-24F6-4000-A000-045E4ECD2577\",\"productCode\":\"EE7C07A00A\"}",
		"wifiAccessible": true
	}],
	"result": 0
}
```

**POST - https://guardian.hubea.com/air/connect**

Connects to the device to signal we are about to send it commands I think.

```
{
	"installId": "hWCbbcJyHn9GRas%FSXvLmyQAx74Ut5DLLBe#QA7bgu!cQgY",
	"jm1UniqueId": "00045E4E",
	"userAgent": {
		"os": "iOS",
		"model": "",
		"fingerprint": "",
		"systemVersion": 7,
		"idForVendor": "",
		"advertisingId": "",
		"versionCode": 37,
		"appType": "1",
		"appVersion": 4,
		"buildNumber": "",
		"lang": "en",
		"locale": "en-US",
		"location": ""
	},
	"hs": "p"
}
```

Example Response Body:
```
{
	"result": 0
}
```

**POST - https://guardian.hubea.com/air/status**

Gets the status of the device

```
{
	"installId": "hWCbbcJyHn9GRas%FSXvLmyQAx74Ut5DLLBe#QA7bgu!cQgY",
	"jm1UniqueId": "00045E4E",
	"userAgent": {
		"os": "iOS",
		"model": "",
		"fingerprint": "",
		"systemVersion": 7,
		"idForVendor": "",
		"advertisingId": "",
		"versionCode": 37,
		"appType": "1",
		"appVersion": 4,
		"buildNumber": "",
		"lang": "en",
		"locale": "en-US",
		"location": ""
	},
	"hs": "p"
}
```

Example Response Body:
```
{
	"result": 0,
	"status": "\/wABAA8QAAQMgAECAAABACYAkAAAWg==",
	"lastModified": 1512353570000,
	"isConnected": true
}
```


**POST - https://guardian.hubea.com/air/command**

Sends a command to the device

```
{
	"installId": "hWCbbcJyHn9GRas%FSXvLmyQAx74Ut5DLLBe#QA7bgu!cQgY",
	"jm1UniqueId": "00045E4E",
	"command": "EgABAoEBAoMAAoIDAoQAAoUBsQ==",
	"userAgent": {
		"os": "iOS",
		"model": "",
		"fingerprint": "",
		"systemVersion": 7,
		"idForVendor": "",
		"advertisingId": "",
		"versionCode": 37,
		"appType": "1",
		"appVersion": 4,
		"buildNumber": "",
		"lang": "en",
		"locale": "en-US",
		"location": ""
	},
	"hs": "p"
}
```

Example Response Body:
```
{
	"result": 0
}
```