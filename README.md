# google-sheet-api
Makes a Google Sheet Into a Public GET API (for reading and writing)

The example we use is a simple one column sheet which can be read and written to append to the last line.

# Steps

1. Create Google Sheet
- Create the column and add data. (for example - "Users" as the header, "Bob" as first row (A2) and "Jason" as second row (A3)
- Name the sheet (for example "Sheet1")
3. Create Apps Script
4. Set Permissions of Apps Script and Publish
5. Test and Enjoy!
Take the "".. and Use it in the Following Way:
a. Read the Sheet
- Add to the end of the "...." ?path=Sheet1&action=read 
b. Write to the Sheet (Add a new row)
- Add to the end of the "...." ?path=Sheet1&action=write

# Additional Notes
- This script before writing to bottom of sheet, will check for duplicates. It you are trying to write a value that already exists in the sheet, it will decline you and let you know.
- Make make sure to read more about sharing access with Google Sheets, Google Sheets and Apps Scripts guidelines, quotas, limitations and costs before trying to setup your own versions.

Hope you liked this!

# Suggestions, Comments and Contact
If you have any suggestions, comments, insight or just want to say hi, thanks or share your experience, you can contact us at:
- Our WebSite: https://onescales.com/
- Contact Us: https://onescales.com/pages/contact
- Youtube Channel: https://www.youtube.com/@onescales
- Twitter/X: https://twitter.com/one_scales
- LinkedIn: https://www.linkedin.com/company/one-scales/




