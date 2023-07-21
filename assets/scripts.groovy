import com.liferay.portal.kernel.service.ResourcePermissionLocalServiceUtil
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.object.service.ObjectEntryLocalServiceUtil;

def updateResourcePermission(long classPK,long newOwnerId)
{
    def className = "com.liferay.object.model.ObjectDefinition#54280"
    def resourcePermission = ResourcePermissionLocalServiceUtil.getResourcePermission(
            PortalUtil.getDefaultCompanyId(),
            className,
            4,
            String.valueOf(classPK),
            20104
    )
    resourcePermission.setOwnerId(newOwnerId)
    ResourcePermissionLocalServiceUtil.updateResourcePermission(resourcePermission)
}


final long creatorUserId = GetterUtil.getLong(customerId);

final long objectEntryId = GetterUtil.getLong(id);


ServiceContext serviceContext  = new ServiceContext();

serviceContext.setUserId(creatorUserId);

def obj = ObjectEntryLocalServiceUtil.getObjectEntry(objectEntryId)
obj.setUserId(creatorUserId)
ObjectEntryLocalServiceUtil.updateObjectEntry(obj);

updateResourcePermission(objectEntryId,creatorUserId)

