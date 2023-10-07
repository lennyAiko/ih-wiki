# ih-wiki

Hi, I am ih-wiki, an open-source collaborative project to share valuable resources for Indie Hackers. Users are free to contribute their knowledge, experience and insights in the realm of indie hacking. Got no experience? ih-wiki is comprehensive enough to help you navigate the indie hacking ecosystem. Work together with ih-wiki to build a collective knowledge base to empower and foster innovation for seasoned / future indie hackers.

## How to contribute

### No-code method

Click [here](https://tally.so/r/nWRN7P) to fill an entry.

or

On ih-wiki site, look at the right to find the + icon. Click on the to navigate to the entry form.

### Code method

1. Fork the repository and clone to desktop using:

```sh
git clone https://github.com/lennyAiko/ih-wiki.git
```
2. Add new resources to `src/data/db.json`. Fields are:
```json
{
    "name": "Name of resource",
    "categories": ["creator"],
    "pricing": "free/freemium/paid",
    "description": "A brief description of the resource (100 chars)",
    "external_link": "link to resource"
},
```
Available categories are => `["creator", "book", "blog", "x", "community", "newsletter", "youtube", "website", "conference", "podcast", "tool"]`

3. Commit your changes.

4. Submit pull request.