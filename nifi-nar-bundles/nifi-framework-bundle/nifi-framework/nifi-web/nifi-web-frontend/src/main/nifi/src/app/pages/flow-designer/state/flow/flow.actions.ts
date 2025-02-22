/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createAction, props } from '@ngrx/store';
import {
    ComponentEntity,
    CreateComponentRequest,
    CreateComponentResponse,
    CreateConnection,
    CreateConnectionDialogRequest,
    CreateConnectionRequest,
    CreatePortRequest,
    CreateProcessGroupDialogRequest,
    CreateProcessGroupRequest,
    CreateProcessorRequest,
    DeleteComponentRequest,
    DeleteComponentResponse,
    EditComponentDialogRequest,
    EditConnectionDialogRequest,
    EditCurrentProcessGroupRequest,
    EnterProcessGroupRequest,
    GroupComponentsDialogRequest,
    GroupComponentsRequest,
    GroupComponentsSuccess,
    LoadConnectionSuccess,
    LoadInputPortSuccess,
    LoadProcessGroupRequest,
    LoadProcessGroupResponse,
    LoadProcessorSuccess,
    LoadRemoteProcessGroupSuccess,
    MoveComponentsRequest,
    NavigateToComponentRequest,
    NavigateToControllerServicesRequest,
    NavigateToManageComponentPoliciesRequest,
    OpenComponentDialogRequest,
    OpenGroupComponentsDialogRequest,
    LoadChildProcessGroupRequest,
    ReplayLastProvenanceEventRequest,
    RunOnceRequest,
    RunOnceResponse,
    SelectComponentsRequest,
    StartComponentRequest,
    StartComponentResponse,
    StartComponentsRequest,
    StartProcessGroupRequest,
    StopComponentRequest,
    StopComponentResponse,
    StopComponentsRequest,
    StopProcessGroupRequest,
    UpdateComponentFailure,
    UpdateComponentRequest,
    UpdateComponentResponse,
    UpdateConnectionRequest,
    UpdateConnectionSuccess,
    UpdatePositionsRequest,
    UploadProcessGroupRequest,
    NavigateToQueueListing
} from './index';
import { StatusHistoryRequest } from '../../../../state/status-history';

const CANVAS_PREFIX = '[Canvas]';

/*
    Loading Flow
 */

export const resetFlowState = createAction(`${CANVAS_PREFIX} Reset Flow State`);

export const reloadFlow = createAction(`${CANVAS_PREFIX} Reload Flow`);

export const leaveProcessGroup = createAction(`${CANVAS_PREFIX} Leave Process Group`);

export const enterProcessGroup = createAction(
    `${CANVAS_PREFIX} Enter Process Group`,
    props<{ request: EnterProcessGroupRequest }>()
);

export const loadProcessGroup = createAction(
    `${CANVAS_PREFIX} Load Process Group`,
    props<{ request: LoadProcessGroupRequest }>()
);

export const loadProcessGroupSuccess = createAction(
    `${CANVAS_PREFIX} Load Process Group Success`,
    props<{ response: LoadProcessGroupResponse }>()
);

export const loadProcessGroupComplete = createAction(
    `${CANVAS_PREFIX} Load Process Group Complete`,
    props<{ response: LoadProcessGroupResponse }>()
);

export const loadChildProcessGroup = createAction(
    `${CANVAS_PREFIX} Load Child Process Group`,
    props<{ request: LoadChildProcessGroupRequest }>()
);

export const loadChildProcessGroupSuccess = createAction(
    `${CANVAS_PREFIX} Load Child Process Group Success`,
    props<{ response: ComponentEntity }>()
);

export const flowApiError = createAction(`${CANVAS_PREFIX} Flow Api Error`, props<{ error: string }>());

export const clearFlowApiError = createAction(`${CANVAS_PREFIX} Clear Flow Api Error`);

export const startProcessGroupPolling = createAction(`${CANVAS_PREFIX} Start Process Group Polling`);

export const stopProcessGroupPolling = createAction(`${CANVAS_PREFIX} Stop Process Group Polling`);

export const loadConnectionsForComponent = createAction(
    `${CANVAS_PREFIX} Load Connections For Component`,
    props<{ id: string }>()
);

export const loadConnection = createAction(`${CANVAS_PREFIX} Load Connection`, props<{ id: string }>());

export const loadConnectionSuccess = createAction(
    `${CANVAS_PREFIX} Load Connection Success`,
    props<{ response: LoadConnectionSuccess }>()
);

export const loadComponentsForConnection = createAction(
    `${CANVAS_PREFIX} Load Components For Connection`,
    props<{ connection: any }>()
);

export const loadProcessor = createAction(`${CANVAS_PREFIX} Load Processor`, props<{ id: string }>());

export const loadProcessorSuccess = createAction(
    `${CANVAS_PREFIX} Load Processor Success`,
    props<{ response: LoadProcessorSuccess }>()
);

export const loadInputPort = createAction(`${CANVAS_PREFIX} Load Input Port`, props<{ id: string }>());

export const loadInputPortSuccess = createAction(
    `${CANVAS_PREFIX} Load Input Port Success`,
    props<{ response: LoadInputPortSuccess }>()
);

export const loadRemoteProcessGroup = createAction(
    `${CANVAS_PREFIX} Load Remote Process Group`,
    props<{ id: string }>()
);

export const loadRemoteProcessGroupSuccess = createAction(
    `${CANVAS_PREFIX} Load Remote Process Group Success`,
    props<{ response: LoadRemoteProcessGroupSuccess }>()
);

/*
    Selectable Behavior
 */

export const addSelectedComponents = createAction(
    `${CANVAS_PREFIX} Add Selected Component`,
    props<{ request: SelectComponentsRequest }>()
);

export const selectComponents = createAction(
    `${CANVAS_PREFIX} Select Components`,
    props<{ request: SelectComponentsRequest }>()
);

export const deselectAllComponents = createAction(`${CANVAS_PREFIX} Deselect All Components`);

export const removeSelectedComponents = createAction(
    `${CANVAS_PREFIX} Remove Selected Components`,
    props<{ request: SelectComponentsRequest }>()
);

export const centerSelectedComponent = createAction(`${CANVAS_PREFIX} Center Selected Component`);

/*
    Create Component Actions
 */

export const createComponentRequest = createAction(
    `${CANVAS_PREFIX} Create Component Request`,
    props<{ request: CreateComponentRequest }>()
);

export const createFunnel = createAction(
    `${CANVAS_PREFIX} Create Funnel`,
    props<{ request: CreateComponentRequest }>()
);

export const createLabel = createAction(`${CANVAS_PREFIX} Create Label`, props<{ request: CreateComponentRequest }>());

export const openNewProcessGroupDialog = createAction(
    `${CANVAS_PREFIX} Open New Process Group Dialog`,
    props<{ request: CreateProcessGroupDialogRequest }>()
);

export const createProcessGroup = createAction(
    `${CANVAS_PREFIX} Create Process Group`,
    props<{ request: CreateProcessGroupRequest }>()
);

export const uploadProcessGroup = createAction(
    `${CANVAS_PREFIX} Upload Process Group`,
    props<{ request: UploadProcessGroupRequest }>()
);

export const getParameterContextsAndOpenGroupComponentsDialog = createAction(
    `${CANVAS_PREFIX} Get Parameter Contexts And Open Group Components Dialog`,
    props<{ request: OpenGroupComponentsDialogRequest }>()
);

export const openGroupComponentsDialog = createAction(
    `${CANVAS_PREFIX} Open Group Components Dialog`,
    props<{ request: GroupComponentsDialogRequest }>()
);

export const groupComponents = createAction(
    `${CANVAS_PREFIX} Group Components`,
    props<{ request: GroupComponentsRequest }>()
);

export const groupComponentsSuccess = createAction(
    `${CANVAS_PREFIX} Group Components Success`,
    props<{ response: GroupComponentsSuccess }>()
);

export const openNewProcessorDialog = createAction(
    `${CANVAS_PREFIX} Open New Processor Dialog`,
    props<{ request: CreateComponentRequest }>()
);

export const createProcessor = createAction(
    `${CANVAS_PREFIX} Create Processor`,
    props<{ request: CreateProcessorRequest }>()
);

export const getDefaultsAndOpenNewConnectionDialog = createAction(
    `${CANVAS_PREFIX} Get Defaults And Open New Connection Dialog`,
    props<{ request: CreateConnectionRequest }>()
);

export const openNewConnectionDialog = createAction(
    `${CANVAS_PREFIX} Open New Connection Dialog`,
    props<{ request: CreateConnectionDialogRequest }>()
);

export const createConnection = createAction(
    `${CANVAS_PREFIX} Create Connection`,
    props<{ request: CreateConnection }>()
);

export const openNewPortDialog = createAction(
    `${CANVAS_PREFIX} Open New Port Dialog`,
    props<{ request: CreateComponentRequest }>()
);

export const createPort = createAction(`${CANVAS_PREFIX} Create Port`, props<{ request: CreatePortRequest }>());

export const createComponentSuccess = createAction(
    `${CANVAS_PREFIX} Create Component Success`,
    props<{ response: CreateComponentResponse }>()
);

export const createComponentComplete = createAction(
    `${CANVAS_PREFIX} Create Component Complete`,
    props<{ response: CreateComponentResponse }>()
);

export const navigateToViewStatusHistoryForComponent = createAction(
    `${CANVAS_PREFIX} Navigate To Status History For Component`,
    props<{ request: OpenComponentDialogRequest }>()
);

export const viewStatusHistoryForComponent = createAction(
    `${CANVAS_PREFIX} View Status History for Component`,
    props<{ request: StatusHistoryRequest }>()
);
/*
    Update Component Actions
 */

export const navigateToEditComponent = createAction(
    `${CANVAS_PREFIX} Navigate To Edit Component`,
    props<{ request: OpenComponentDialogRequest }>()
);

export const navigateToManageComponentPolicies = createAction(
    `${CANVAS_PREFIX} Navigate To Manage Component Policies`,
    props<{ request: NavigateToManageComponentPoliciesRequest }>()
);

export const editComponent = createAction(
    `${CANVAS_PREFIX} Edit Component`,
    props<{ request: EditComponentDialogRequest }>()
);

export const navigateToEditCurrentProcessGroup = createAction(
    `${CANVAS_PREFIX} Navigate To Edit Current Process Group`
);

export const navigateToControllerServicesForProcessGroup = createAction(
    `${CANVAS_PREFIX} Navigate To Controller Services For Process Group`,
    props<{ request: NavigateToControllerServicesRequest }>()
);

export const navigateToQueueListing = createAction(
    `${CANVAS_PREFIX} Navigate To Queue Listing`,
    props<{ request: NavigateToQueueListing }>()
);

export const editCurrentProcessGroup = createAction(
    `${CANVAS_PREFIX} Edit Current Process Group`,
    props<{
        request: EditCurrentProcessGroupRequest;
    }>()
);

export const openEditPortDialog = createAction(
    `${CANVAS_PREFIX} Open Edit Port Dialog`,
    props<{ request: EditComponentDialogRequest }>()
);

export const openEditProcessorDialog = createAction(
    `${CANVAS_PREFIX} Open Edit Processor Dialog`,
    props<{ request: EditComponentDialogRequest }>()
);

export const openEditConnectionDialog = createAction(
    `${CANVAS_PREFIX} Open Edit Connection Dialog`,
    props<{ request: EditConnectionDialogRequest }>()
);

export const openEditProcessGroupDialog = createAction(
    `${CANVAS_PREFIX} Open Edit Process Group Dialog`,
    props<{ request: EditComponentDialogRequest }>()
);

export const updateComponent = createAction(
    `${CANVAS_PREFIX} Update Component`,
    props<{ request: UpdateComponentRequest }>()
);

export const updateComponentSuccess = createAction(
    `${CANVAS_PREFIX} Update Component Success`,
    props<{ response: UpdateComponentResponse }>()
);

export const updateComponentFailure = createAction(
    `${CANVAS_PREFIX} Update Component Failure`,
    props<{ response: UpdateComponentFailure }>()
);

export const updateProcessor = createAction(
    `${CANVAS_PREFIX} Update Processor`,
    props<{ request: UpdateComponentRequest }>()
);

export const updateProcessorSuccess = createAction(
    `${CANVAS_PREFIX} Update Processor Success`,
    props<{ response: UpdateComponentResponse }>()
);

export const updateConnection = createAction(
    `${CANVAS_PREFIX} Update Connection`,
    props<{ request: UpdateConnectionRequest }>()
);

export const updateConnectionSuccess = createAction(
    `${CANVAS_PREFIX} Update Connection Success`,
    props<{ response: UpdateConnectionSuccess }>()
);

export const updatePositions = createAction(
    `${CANVAS_PREFIX} Update Positions`,
    props<{ request: UpdatePositionsRequest }>()
);

export const updatePositionComplete = createAction(
    `${CANVAS_PREFIX} Update Position Complete`,
    props<{ response: UpdateComponentResponse }>()
);

export const moveComponents = createAction(
    `${CANVAS_PREFIX} Move Components`,
    props<{ request: MoveComponentsRequest }>()
);

/*
    Delete Component Actions
 */

export const deleteComponents = createAction(
    `${CANVAS_PREFIX} Delete Components`,
    props<{ request: DeleteComponentRequest[] }>()
);

export const deleteComponentsSuccess = createAction(
    `${CANVAS_PREFIX} Delete Components Success`,
    props<{ response: DeleteComponentResponse[] }>()
);

/*
    Transition
 */

export const setDragging = createAction(`${CANVAS_PREFIX} Set Dragging`, props<{ dragging: boolean }>());

export const setTransitionRequired = createAction(
    `${CANVAS_PREFIX} Set Transition Required`,
    props<{ transitionRequired: boolean }>()
);

export const setSkipTransform = createAction(
    `${CANVAS_PREFIX} Set Skip Transform`,
    props<{ skipTransform: boolean }>()
);

export const navigateToComponent = createAction(
    `${CANVAS_PREFIX} Navigate To Component`,
    props<{ request: NavigateToComponentRequest }>()
);

export const navigateWithoutTransform = createAction(
    `${CANVAS_PREFIX} Navigate Without Transform`,
    props<{ url: string[] }>()
);

/*
    Palette actions
 */

export const setNavigationCollapsed = createAction(
    `${CANVAS_PREFIX} Set Navigation Collapsed`,
    props<{ navigationCollapsed: boolean }>()
);

export const setOperationCollapsed = createAction(
    `${CANVAS_PREFIX} Set Operation Collapsed`,
    props<{ operationCollapsed: boolean }>()
);

/*
    General
 */

export const showOkDialog = createAction(
    `${CANVAS_PREFIX} Show Ok Dialog`,
    props<{ title: string; message: string }>()
);

export const renderConnectionsForComponent = createAction(
    `${CANVAS_PREFIX} Render Connections For Component`,
    props<{ id: string; updatePath: boolean; updateLabel: boolean }>()
);

export const navigateToProvenanceForComponent = createAction(
    `${CANVAS_PREFIX} Navigate To Provenance For Component`,
    props<{ id: string }>()
);

export const replayLastProvenanceEvent = createAction(
    `${CANVAS_PREFIX} Replay Last Provenance Event`,
    props<{ request: ReplayLastProvenanceEventRequest }>()
);

export const runOnce = createAction(`${CANVAS_PREFIX} Run Once`, props<{ request: RunOnceRequest }>());

export const runOnceSuccess = createAction(`${CANVAS_PREFIX} Run Once Success`, props<{ response: RunOnceResponse }>());

export const startComponent = createAction(
    `${CANVAS_PREFIX} Start Component`,
    props<{ request: StartComponentRequest | StartProcessGroupRequest }>()
);

export const startComponents = createAction(
    `${CANVAS_PREFIX} Start Components`,
    props<{ request: StartComponentsRequest }>()
);

export const startComponentSuccess = createAction(
    `${CANVAS_PREFIX} Start Component Success`,
    props<{ response: StartComponentResponse }>()
);

export const stopComponent = createAction(
    `${CANVAS_PREFIX} Stop Component`,
    props<{ request: StopComponentRequest | StopProcessGroupRequest }>()
);

export const stopComponents = createAction(
    `${CANVAS_PREFIX} Stop Components`,
    props<{ request: StopComponentsRequest }>()
);

export const stopComponentSuccess = createAction(
    `${CANVAS_PREFIX} Stop Component Success`,
    props<{ response: StopComponentResponse }>()
);

export const startCurrentProcessGroup = createAction(`${CANVAS_PREFIX} Start Current Process Group`);

export const stopCurrentProcessGroup = createAction(`${CANVAS_PREFIX} Stop Current Process Group`);
