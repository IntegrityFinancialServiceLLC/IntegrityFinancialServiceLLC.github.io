$Email = "dwstanley@integrityfinancialservicellc.com" 
$Password = "Transform2!Steve123"
$CAPTCHA_SECRET="6Ld4LyQaAAAAAAcJgIAMJQCQ3B-ArchznBkWR7A9"
$SUCCESS_URL="https://campaigns.integrityfinancialservicellc.com/succes.html"
$FAILURE_URL = "https://campaigns.integrityfinancialservicellc.com/succes.html"
$Path = "C:\users\dwsta\Onedrive\Documents\~Work\Advertising\LandingPages\IntegrityFinancialServiceLLC.github.io\backend\backend.js"
bx login -r us-south -o $Email -g Default -s "dev" -u $Email -p $Password
bx fn package update mysite --param CAPTCHA_SECRET "$CAPTCHA_SECRET" --param SUCCESS_URL "$SUCCESS_URL" --param FAILURE_URL "$FAILURE_URL"
bx fn action update "mysite/contactus" --kind nodejs:12 $Path --web true
bx fn action get "mysite/contactus" --url

Break