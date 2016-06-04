### API Basejump: Request Header Parser Microservice
---

#### User stories:

* I can get the IP address, language and operating system for my browser.

##### Example Usage:

<https://vp-header-parser.herokuapp.com/api/whoami>


##### Example Output:

```javascript
	{
	ipaddress: "127.0.0.1 ",
	language: "en-US ",
	software: "X11; Linux x86_64"
	}
	
```
---

##### UI:

![header-parser-ui](https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1465067738/fcc/header-parser-ui.png)

---

#### How To Run This App Locally

Clone This Repoistory
```bash
git clone https://github.com/vinaypuppal/header-parser-microservice.git
```

```bash
cd <cloned directory>
```

Install dependencies and start server
```bash
npm install
npm run dev
```
