# import subprocess


# result = subprocess.run(['ls', '-la'], stdout=subprocess.PIPE)
# print(result.stdout.decode('utf-8'))

import wmi

from .NetworkAdapter import NetworkAdapter
from .src.hosts import Host, read_hosts_file

# nic_configs = wmi.WMI('').Win32_NetworkAdapterConfiguration(IPEnabled=True)
nic_configs = wmi.WMI("").Win32_NetworkAdapter()

nics: list[NetworkAdapter] = []

for nic in nic_configs:
    adapter = NetworkAdapter(
        adapter_type=nic.AdapterType,
        adapter_type_id=nic.AdapterTypeID,
        auto_sense=nic.AutoSense,
        availability=nic.Availability,
        caption=nic.Caption,
        config_manager_error_code=nic.ConfigManagerErrorCode,
        config_manager_user_config=nic.ConfigManagerUserConfig,
        creation_class_name=nic.CreationClassName,
        description=nic.Description,
        device_id=nic.DeviceID,
        error_cleared=nic.ErrorCleared,
        error_description=nic.ErrorDescription,
        guid=nic.GUID,
        index=nic.Index,
        install_date=nic.InstallDate,
        installed=nic.Installed,
        interface_index=nic.InterfaceIndex,
        last_error_code=nic.LastErrorCode,
        mac_address=nic.MACAddress,
        manufacturer=nic.Manufacturer,
        max_number_controlled=nic.MaxNumberControlled,
        max_speed=nic.MaxSpeed,
        name=nic.Name,
        net_connection_id=nic.NetConnectionID,
        net_connection_status=nic.NetConnectionStatus,
        net_enabled=nic.NetEnabled,
        network_addresses=nic.NetworkAddresses,
        permanent_address=nic.PermanentAddress,
        physical_adapter=nic.PhysicalAdapter,
        pnp_device_id=nic.PNPDeviceID,
        power_management_capabilities=nic.PowerManagementCapabilities,
        power_management_supported=nic.PowerManagementSupported,
        product_name=nic.ProductName,
        service_name=nic.ServiceName,
        speed=nic.Speed,
        status=nic.Status,
        status_info=nic.StatusInfo,
        system_creation_class_name=nic.SystemCreationClassName,
        system_name=nic.SystemName,
        time_of_last_reset=nic.TimeOfLastReset,
    )
    nics.append(adapter)
    # print(adapter)
    # print()

# fastapi

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", response_model=list[NetworkAdapter])
async def root():
    return nics


@app.get("/api/hosts", response_model=list[Host])
async def hosts() -> list[Host]:
    return read_hosts_file()


if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
    )
