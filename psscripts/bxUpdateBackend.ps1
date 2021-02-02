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
# SIG # Begin signature block
# MIIFtQYJKoZIhvcNAQcCoIIFpjCCBaICAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQU39Jtl5f5kwcLxD17+QDDbNyH
# y1SgggM4MIIDNDCCAhygAwIBAgIQK6mtbThjU6JESZFJbY6A2DANBgkqhkiG9w0B
# AQsFADAyMTAwLgYDVQQDDCdEYXZpZFNASW50ZWdyaXR5RmluYW5jaWFsU2Vydmlj
# ZUxMQy5jb20wHhcNMjEwMTIwMjExNDM3WhcNMjIwMTIwMjEzNDM3WjAyMTAwLgYD
# VQQDDCdEYXZpZFNASW50ZWdyaXR5RmluYW5jaWFsU2VydmljZUxMQy5jb20wggEi
# MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC6Etazf7exgNQhFoKS1NJmz5Tc
# SCBkZVhtbm+vzFTdB+9L9tBb2Q4xO1Hb9qHNbROmstunRVIdGeY2tDNJXBEQdJir
# jn9EpqVUtQNASyvnY96Oj8pLEQSltP5bS/UpdrgM+g+UnTCte5pnQH3oMcsEwY7M
# +p/Lbu1sWoWzdi40q5DMxVeWsa68RBo6ojOIWw8tRsFbUtarlG/QZ0wlsQ9Q8/bs
# LSxr1XGpEvhHP7FhEdy6QkFDYshFGhB+Ua+8p9dmkGwxhA43VD3wWwjuiSMiGbHA
# rywwrjuWXfV48l72WNZXj0DsKwr6tjpqbaOCv387OkkHiLnu2sa6kuSInbvFAgMB
# AAGjRjBEMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNV
# HQ4EFgQU5yRM1F6uEcf2qKSWZ4FSWA6hlXAwDQYJKoZIhvcNAQELBQADggEBAImG
# XihQysDbSc5dXl/SFsW3Sy96XS8Jwf3qSQxbRirZ0fa8gsVQ4RFu1moXNrhiDBS4
# VN9Xoa9IuaXJj16pkqfeoFj1mjvLoCoSgovwgA7BbKAHRKXIhi+b9AhS5IVxheiu
# TJFyRBONKs6lQc5Xfn71WZpC7G3amIYxG9FKXx8Qp1BC5pkAjPzGCgbXw9zyxq49
# 0lN5qVqPDgCTPiKum8rv8IWpBbBpPGcCHUjy5ekkgqcrxJsatU/x3FzIscLNQ5xj
# ok5FVX8Zqs5ILNJTNh9MP5VfyKR9Mg7IRz+ZeglprEXBZu7ceiTL6zx6mZDN4uut
# kCsQwscGMQ6pqkNxwo8xggHnMIIB4wIBATBGMDIxMDAuBgNVBAMMJ0RhdmlkU0BJ
# bnRlZ3JpdHlGaW5hbmNpYWxTZXJ2aWNlTExDLmNvbQIQK6mtbThjU6JESZFJbY6A
# 2DAJBgUrDgMCGgUAoHgwGAYKKwYBBAGCNwIBDDEKMAigAoAAoQKAADAZBgkqhkiG
# 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4wDAYKKwYBBAGCNwIB
# FTAjBgkqhkiG9w0BCQQxFgQU1M8TILQpN0VrBMxR5vFY7yAAnx4wDQYJKoZIhvcN
# AQEBBQAEggEANdvfyA3WWN1Bw8ETHMYS83/VrYNSqAkICTSRi2YMAva9YAZP1eh6
# dEdI1o7+u5UzJ4lcjlu1jC74oeFZI58yFyfYHc0EqMHHyC32CXu9ZqPZQRU/D+Lr
# iqT+qxlvOup/OZJqeXdOHYfjI8Yngho0e3ByvCht7oDSICQB8kO63p42TyrZtFq1
# XL67DNKcnE9ACLod2Y1ws/imizCiSk28ZMFNe/XwA7urTqCsxvQ6OJYG2GodGRXM
# gqHjoR9lq1Spb7eefy/Wg+7I0Z3aLe7dqzzPMJZwiWNXtorsOYgAPAV/c8rXD4t3
# c3gXvvZSGFApnYJ7rH1RIk6COQZtMXxXkg==
# SIG # End signature block
