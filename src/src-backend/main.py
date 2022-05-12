
# import subprocess


# result = subprocess.run(['ls', '-la'], stdout=subprocess.PIPE)
# print(result.stdout.decode('utf-8'))

import wmi

from .NetworkAdapter import NetworkAdapter

# nic_configs = wmi.WMI('').Win32_NetworkAdapterConfiguration(IPEnabled=True)
nic_configs = wmi.WMI('').Win32_NetworkAdapter()

nics : list[NetworkAdapter] = []

for nic in nic_configs:
    # print(nic)
    nics.append(
        NetworkAdapter(
            adapter_type=nic.AdapterType,
            adapter_type_id=nic.AdapterTypeID,
            net_connection_id=nic.NetConnectionID,
        )
    )

for nic in nics:
    print(nic)



# fastapi

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/", response_model=list[NetworkAdapter])
async def root():
    return nics
    

if __name__ == "__main__":
    uvicorn.run(app)
