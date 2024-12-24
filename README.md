# google-sheet-api
Makes a Google Sheet Into a Public GET API (for reading and writing)

The example we use is a simple one column sheet which can be read in json output and written to append to the last line.

For a visual overview and full details, see our article at https://onescales.com/blogs/main/google-sheet-public-rest-api and our youtube video at https://www.youtube.com/watch?v=pJOcRSEqhDk

# Steps

1. Create Google Sheet
- Create the column and add data. (for example - "Users" as the header, "Bob" as first row (A2) and "Jason" as second row (A3)
- Name the sheet (for example "Sheet1"). If you change this, you will need to change the value also in your API request path= (see step 5 below)
2. Create Apps Script
- In Google Sheet Top Menu, Click on Extensions -> App Script
- Edit the Code.gs file and copy paste this repository Code.gs. Make sure to edit row 70 "Users" with the name of header of your column A ->       rowData.push(e.parameter['Users'] || '');
- Set a "project title" name and click on "Deploy" -> "New Deployment"
3. Set Permissions of Apps Script and Publish
Make sure to deploy as "Web app" and copy the Web App URL: https://script.google.com/macros/s/xxxxxxxxxxxxxx/exec (make sure to replace the x's with your ID)
4. Using the Api and Testing
Take the "Web App URL" and Use it in the Following Way:
a. Read the Sheet
- Add to the end of the "Web App URL" ?path=Sheet1&action=read
b. Write to the Sheet (Add a new row)
- Add to the end of the "Web App URL" ?path=Sheet1&action=write&Users=[name]
5. Start Using It. Enjoy!

# Additional Notes
- This script before writing to bottom of sheet, will check for duplicates. It you are trying to write a value that already exists in the sheet, it will decline the new entry and let you know.
- Make make sure to read more about sharing access with Google Sheets, Google Sheets and Apps Scripts guidelines, quotas, limitations and costs before trying to setup your own versions.
- All code and instructions are as is. By reading this repository, readme or any code, you acknowledge that you are solely responsible for your own doings.

Hope you liked this!

# Support Us / Donate
If this helped you in any way, please consider supporting us at https://onescales.com/pages/support-us

# Suggestions, Comments and Contact
If you have any suggestions, comments, insight or just want to say hi, thanks or share your experience, you can contact us at:
- Our WebSite: https://onescales.com/
- Contact Us: https://onescales.com/pages/contact
- Youtube Channel: https://www.youtube.com/@onescales
- Twitter/X: https://twitter.com/one_scales
- LinkedIn: https://www.linkedin.com/company/one-scales/




