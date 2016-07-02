# Class14
Class14 - Nurbek, Nick, Carolina

Git Workflow:
- Create two separate branches one for weather page and another for unit conversions page.
- Once a person has reached a milestone event for their respective programming tasks:
  - Person creates pull request from feature branch.
  - Another team member reviews request in GitHub and accepts pull request and merges with master branch.
  - Remaining team members save current feature branch progress and everyone 'git pull origin master'.
  - Remaining team members switch back to feature branch and 'git merge master'
  - If conflicts emerge:
    - Resolve merge conflicts by correcting marked lines and getting everyone's code consistent.
    - git add <affected files>
    - 'git commit -m "merged master"'
- Repeat as milestones are achieved.

To do:
Weather Page:
- Carolina to map out html structure and create header with nav toolbar.
- Nurbek to create section below nav bar for searching with social media icons.
- Nick to finish layout and add any additional styling.

Unit Converter Page:
- Nick to start by writing JavaScript logic for handling unit conversions while Nurbek establishes page layout in html and creates form for user input.
- Carolina to write Javascript linking to html while working with Nick to obtain appropriate IDs and display content on page.
- Nurbek to finish Javascript logic by managing previous user entries for list implementation while working with Carolina to display list results once submitted.
