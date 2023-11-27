const router = require('express').Router()
const path = require('path')
const {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
} = require('../../controllers/employeesController')
const { verifyJWT } = require('../../middleware/verifyJWT')
const verifyRoles = require('../../middleware/verifyRoles')
const ROLE_LIST = require('../../config/roles_list')


router.route('/')
    .get(verifyJWT,getAllEmployees)
    .post(verifyRoles(ROLE_LIST.Admin,ROLE_LIST.Editor),createNewEmployee)
    .put(verifyRoles(ROLE_LIST.Admin,ROLE_LIST.Editor),updateEmployee)
    .delete(verifyRoles(ROLE_LIST.Admin),deleteEmployee)

router.route(getEmployee)

module.exports = router