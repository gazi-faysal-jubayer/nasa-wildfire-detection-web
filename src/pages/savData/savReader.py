import pandas as pd

# Load the .sav file into a DataFrame
df = pd.read_spss('finalized_model_ada.sav')

# Convert the DataFrame to JSON and save it to a file
df.to_json('output.json', orient='records')
