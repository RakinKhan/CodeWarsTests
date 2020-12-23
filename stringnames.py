# Format a string of names like 'Bart, Lisa & Maggie'.
# namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# # returns 'Bart & Lisa'

# namelist([ {'name': 'Bart'} ])
# # returns 'Bart'

# namelist([])
# # returns ''

def namelist(names):
    string = ''
    if len(names) == 1:
        single = names[0]
        aName = single['name']
        string = string + aName
    elif len(names) == 2:
        for idx, val in enumerate(names):
            if idx == 0:
                aName = val['name']
                string = string + aName
            else:
                aName = val['name']
                string = string + ' & ' + aName
    elif len(names) >= 3:
        for idx, val in enumerate(names):
            if idx == 0:
                aName = val['name']
                string = string + aName
            elif idx > 0 and idx <= (len(names) - 2):
                aName = val['name']
                string = string + ', ' + aName
            elif idx == (len(names) - 1):
                aName = val['name']
                string = string + ' & ' + aName
    else:
        return string
    return string


namelist([])
