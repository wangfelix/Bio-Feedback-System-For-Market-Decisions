import pandas as pd
from pandas import HDFStore

hdf = HDFStore("../data/eda.h5", mode="r")
data_h5 = pd.read_hdf("../data/eda.h5")

#data = pd.read_fwf("../data/eda.txt")

#data.head()